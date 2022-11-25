<?php

$a = new stdClass();

$a->objTest = new stdClass();

//If you don't override clone method, the default behavior is shallow copy. If your objects have only primitive member variables, it's totally ok. But in a typeless language with another object as member variables, it's a headache.
$b = clone $a;

//serialization/deserialization  achieves deep copy with a heavy cost depending on the complexity of the object.

$c = unserialize(serialize($a));

$a->name = "AA";
$a->objTest->other = "AAAA";

print_r($b);
print_r($c);

// ************** This is another clone good way for properties obj
class MyClass {
    public $someObject;

    public function __construct() {
        $this->someObject = new stdClass();
    }

    public function __clone() {
        $this->someObject = clone $this->someObject;
    }

}

$d = new MyClass();
$e = clone $d;

$d->someObject->other = "AAAA";
print_r($e);
