dart_library.library('language/reexport_core_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__reexport_core_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const reexport_core_test = Object.create(null);
  const reexport_core_helper = Object.create(null);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  reexport_core_test.main = function() {
    let o = new core.Object();
    expect$.Expect.isTrue(core.Object.is(o));
  };
  dart.fn(reexport_core_test.main, VoidTovoid());
  reexport_core_helper.TypeError = core.TypeError;
  reexport_core_helper.Comparator = core.Comparator;
  reexport_core_helper.Match = core.Match;
  reexport_core_helper.print = core.print;
  reexport_core_helper.StateError = core.StateError;
  reexport_core_helper.Set$ = core.Set$;
  reexport_core_helper.Set = core.Set;
  reexport_core_helper.Symbol = core.Symbol;
  reexport_core_helper.Deprecated = core.Deprecated;
  reexport_core_helper.double = core.double;
  reexport_core_helper.StackTrace = core.StackTrace;
  reexport_core_helper.RangeError = core.RangeError;
  reexport_core_helper.RuneIterator = core.RuneIterator;
  reexport_core_helper.RegExp = core.RegExp;
  reexport_core_helper.bool = core.bool;
  dart.export(reexport_core_helper, core, 'deprecated');
  reexport_core_helper.ArgumentError = core.ArgumentError;
  dart.export(reexport_core_helper, core, 'override');
  reexport_core_helper.UnimplementedError = core.UnimplementedError;
  reexport_core_helper.NoSuchMethodError = core.NoSuchMethodError;
  reexport_core_helper.CastError = core.CastError;
  reexport_core_helper.num = core.num;
  reexport_core_helper.int = core.int;
  reexport_core_helper.Sink$ = core.Sink$;
  reexport_core_helper.Sink = core.Sink;
  reexport_core_helper.StringBuffer = core.StringBuffer;
  reexport_core_helper.BidirectionalIterator$ = core.BidirectionalIterator$;
  reexport_core_helper.BidirectionalIterator = core.BidirectionalIterator;
  reexport_core_helper.Error = core.Error;
  reexport_core_helper.FallThroughError = core.FallThroughError;
  reexport_core_helper.StringSink = core.StringSink;
  reexport_core_helper.IndexError = core.IndexError;
  reexport_core_helper.Map$ = core.Map$;
  reexport_core_helper.Map = core.Map;
  reexport_core_helper.Duration = core.Duration;
  reexport_core_helper.Stopwatch = core.Stopwatch;
  reexport_core_helper.Invocation = core.Invocation;
  reexport_core_helper.UriData = core.UriData;
  reexport_core_helper.AssertionError = core.AssertionError;
  reexport_core_helper.Exception = core.Exception;
  reexport_core_helper.Uri = core.Uri;
  reexport_core_helper.IntegerDivisionByZeroException = core.IntegerDivisionByZeroException;
  reexport_core_helper.DateTime = core.DateTime;
  reexport_core_helper.String = core.String;
  reexport_core_helper.CyclicInitializationError = core.CyclicInitializationError;
  reexport_core_helper.Expando$ = core.Expando$;
  reexport_core_helper.Expando = core.Expando;
  reexport_core_helper.Function = core.Function;
  reexport_core_helper.Type = core.Type;
  reexport_core_helper.Comparable$ = core.Comparable$;
  reexport_core_helper.Comparable = core.Comparable;
  reexport_core_helper.Iterator$ = core.Iterator$;
  reexport_core_helper.Iterator = core.Iterator;
  reexport_core_helper.ConcurrentModificationError = core.ConcurrentModificationError;
  reexport_core_helper.AbstractClassInstantiationError = core.AbstractClassInstantiationError;
  reexport_core_helper.identical = core.identical;
  reexport_core_helper.Iterable$ = core.Iterable$;
  reexport_core_helper.Iterable = core.Iterable;
  reexport_core_helper.UnsupportedError = core.UnsupportedError;
  reexport_core_helper.FormatException = core.FormatException;
  dart.export(reexport_core_helper, core, 'proxy');
  reexport_core_helper.List$ = core.List$;
  reexport_core_helper.List = core.List;
  reexport_core_helper.identityHashCode = core.identityHashCode;
  reexport_core_helper.StackOverflowError = core.StackOverflowError;
  reexport_core_helper.StrongModeError = core.StrongModeError;
  reexport_core_helper.Pattern = core.Pattern;
  reexport_core_helper.NullThrownError = core.NullThrownError;
  reexport_core_helper.OutOfMemoryError = core.OutOfMemoryError;
  reexport_core_helper.Object = core.Object;
  reexport_core_helper.Runes = core.Runes;
  reexport_core_helper.Null = core.Null;
  // Exports:
  exports.reexport_core_test = reexport_core_test;
  exports.reexport_core_helper = reexport_core_helper;
});