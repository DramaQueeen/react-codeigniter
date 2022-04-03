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

        $form = $this->request->getJSON(true);  


        if(!$id = $this->model->insert($form)){
            return $this->failValidationErrors($this->model->errors());
        }

        $note = $this->model->find($id);

        return $this->respondCreated(['message' => 'Registro creado correctamente', 'data' => $note]);

    }

    public function update($id = null)
    {
        $form = $this->request->getJSON(true);  

        if(empty($form)){
            return $this->failValidationErrors('No hay nada que actualizar.');
        }

        if(!$this->model->find($id)){
            return $this->failNotFound();
        }

        if(!$this->model->update($id, $form)){
            return $this->failValidationErrors($this->model->errors());

        }

        return $this->respondUpdated(['message' => 'Registro actualizado correctamente', 'data' => $this->model->find($id)]);
    }

    public function delete($id = null)
    {
        if(!$this->model->find($id)){
            return $this->failNotFound();
        }

        $this->model->where('id', $id)->delete();

        return $this->respondDeleted(['message' => 'Registro ' . $id . ' fue elminado correctamente']);
    }
}

