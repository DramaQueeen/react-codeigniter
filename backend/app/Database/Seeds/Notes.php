<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Test\Fabricator;

class Notes extends Seeder
{
    public function run()
    {
       $fabricator =  new Fabricator(\App\Models\Notes::class);

       $fabricator->create(10);
    }
}
