<?php

namespace App\Models;

use CodeIgniter\Model;
use Faker\Generator;

class Notes extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'notes';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['title', 'body'];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [

        'title' => [
            'label' => 'titulo',
            'rules' => 'required'
        ],
        'body' => [
            'label' => 'cuerpo',
            'rules' => 'required'
        ]

    ];
    protected $validationMessages   = [

        'title' => [
            'required' => 'El campo {field} es requerido'
        ],
        'body' => [
            'required' => 'El campo {field} es requerido'
        ]

    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

public function fake(Generator &$faker){
    return [
        'title'  => $faker->words(2, true),
        'body'  => $faker->sentence(6)
    ];
}

}

