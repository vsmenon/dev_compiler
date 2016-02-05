// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of js_ast;

abstract class _TypePrinterBase implements TypeRefVisitor {
  void out(String s);
  void visit(Node node);

  outSeparated(String separator, Iterable items, [action(dynamic item)]) {
    action ??= visit;
    var first = true;
    for (var item in items) {
      if (first) {
        first = false;
      } else {
        out(separator);
      }
      action(item);
    }
  }

  @override
  visitGenericTypeRef(GenericTypeRef node) {
    visit(node.rawType);
    if (node.typeParams.isNotEmpty) {
      out('<');
      outSeparated(", ", node.typeParams);
      out('>');
    }
  }
}

abstract class TypeScriptTypePrinter extends _TypePrinterBase {

  @override
  visitArrayTypeRef(ArrayTypeRef node) {
    if (node.elementType == null) {
      out("Array");
    } else {
      visit(node.elementType);
      out("[]");
    }
  }

  @override
  visitOptionalTypeRef(OptionalTypeRef node) {
    visit(node.type);
  }

  @override
  visitRecordTypeRef(RecordTypeRef node) {
    out('{');
    outSeparated(", ", node.types.keys, (Identifier name) {
      var type = node.types[name];
      visit(name);
      if (type is OptionalTypeRef) {
        out("?: ");
        visit(type.type);
      } else {
        out(": ");
        visit(type);
      }
    });
    out('}');
  }

  @override
  visitNamedTypeRef(NamedTypeRef node) {
    visit(node.name);
  }

  @override
  visitUnionTypeRef(UnionTypeRef node) {
    outSeparated("|", node.types);
  }

  @override
  visitFunctionTypeRef(FunctionTypeRef node) {
    if (node.returnType == null) {
      out('Function');
    } else {
      out('(');
      outSeparated(", ", node.paramTypes);
      out(') => ');
      visit(node.returnType);
    }
  }

  @override
  visitAnyTypeRef(AnyTypeRef node) {
    out("any");
  }
}

class ClosureTypePrinter extends _TypePrinterBase implements NodeVisitor {
  final _buffer = new StringBuffer();

  @override
  void out(String s) => _buffer.write(s);

  @override
  void visit(Node node) => node.accept(this);

  noSuchMethod(Invocation i) => super.noSuchMethod(i);

  @override
  visitIdentifier(Identifier node) {
    //out(localNamer.getName(node));
    out(node.name);
  }

  @override toString() => _buffer.toString();

  @override
  visitArrayTypeRef(ArrayTypeRef node) {
    out("Array");
    if (node.elementType != null) {
      out("<");
      visit(node.elementType);
      out(">");
    }
  }

  @override
  visitOptionalTypeRef(OptionalTypeRef node) {
    visit(node.type);
    out("=");
  }

  @override
  visitRecordTypeRef(RecordTypeRef node) {
    out('{');
    outSeparated(", ", node.types.keys, (Identifier name) {
      var type = node.types[name];
      visit(name);
      out(": ");
      visit(type is OptionalTypeRef ? type.orUndefined() : type);
    });
    out('}');
  }

  @override
  visitNamedTypeRef(NamedTypeRef node) {
    if (node == new TypeRef.null_()) out("null");
    else visit(node.name);
  }

  @override
  visitAnyTypeRef(AnyTypeRef node) {
    out("*");
  }

  @override
  visitUnionTypeRef(UnionTypeRef node) {
    out("(");
    outSeparated("|", node.types);
    out(")");
  }

  @override
  visitFunctionTypeRef(FunctionTypeRef node) {
    out('function(');
    if (node.paramTypes == null) {
      out("...*");
    } else {
      outSeparated(", ", node.paramTypes);
    }
    out(')');
    if (node.returnType != null) {
      out(":");
      visit(node.returnType);
    }
  }
}