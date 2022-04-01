<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Notes extends Migration
{
    public function up()
    {
        $this->forge->addField([

            'id' => [
                'type' => 'int',
                'constraint' => 12,
                'unsigned' => false,
                'auto_increment' => true
            ],
            'title' => [
                'type' => 'varchar',
                'constraint' => 255,
                'null' => false,
            ],
            'body' => [
                'type' => 'text',
                'null' => false,
            ]

        ]);

        $this->forge->addKey('id', true);
        $this->forge->createTable('notes');
    }

    public function down()
    {
        $this->forge->dropTable('notes');
    }
}
