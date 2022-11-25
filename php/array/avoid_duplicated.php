<?php


//11. A partir del siguiente array, crea uno nuevo con los apellidos de los usuarios sin incluir duplicados. Bonus points si el nuevo array está ordenado.
$users = [
    ['id' => 2, 'name' => 'B', 'surname' => 'BB'],
    ['id' => 1, 'name' => 'A', 'surname' => 'AA'],
    ['id' => 3, 'name' => 'C', 'surname' => 'CC'],
    ['id' => 1, 'name' => 'A', 'surname' => 'AA'],
    ['id' => 2, 'name' => 'B', 'surname' => 'BB'],
];

$surnames = array_map(function ($user){
    return $user['surname'];
}, $users);
$surnamesDistinct = array_unique($surnames);
sort($surnamesDistinct);


print_r($surnamesDistinct);
