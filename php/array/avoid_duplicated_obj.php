<?php


//11. A partir del siguiente array, crea uno nuevo con los users sin incluir duplicados. Bonus points si el nuevo array está ordenado.
$users = [
    ['id' => 2, 'name' => 'B', 'surname' => 'BB'],
    ['id' => 1, 'name' => 'A', 'surname' => 'AA'],
    ['id' => 3, 'name' => 'C', 'surname' => 'CC'],
    ['id' => 1, 'name' => 'A', 'surname' => 'AA'],
    ['id' => 2, 'name' => 'B', 'surname' => 'BB'],
];

$usersMap = array();

$usersDistinct = array_filter($users, function ($user) use (&$usersMap){
    $key = $user['id'];
    if (!array_key_exists($key, $usersMap) ){
        $usersMap[$key] = $user;
        return true;
    }
    return false;
});

usort($usersDistinct, function ($a, $b){
  return $a['surname'] > $b['surname'] ? 1 : -1;
});

print_r($usersDistinct);
