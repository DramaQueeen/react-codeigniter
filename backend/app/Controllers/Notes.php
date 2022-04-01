<?php

namespace App\Controllers;

//Buscar en restful resources handling

use CodeIgniter\RESTful\ResourceController;

class Notes extends ResourceController
{

    protected $modelName = 'App\Models\Notes';
    protected $format    = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    public function create()
    {

        $form = dd($this->request->getJSON(true));

        return $message = "Probando";

        // if(!$id = $this->model->insert){
        //     return $this->failValidationErrors($this->model->errors());
        // }

        // $note = $this->model->find($id);

        // return $this->respondCreated(['message' => 'Registro creado correctamente', 'data' => $note]);

    }
}

