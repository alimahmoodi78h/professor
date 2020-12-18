<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Sign_in extends CI_Controller
{
    



    function index()
    {
        $this->load->view("sign_in");
    }
}
