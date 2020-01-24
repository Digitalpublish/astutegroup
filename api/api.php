<?php
  public function contact()
  {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
      header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

      $formdata = json_decode(file_get_contents('php://input'), true);

      if( ! empty($formdata)) {

          $name = $formdata['name'];
          $subject = $formdata['subject'];
          $email = $formdata['email'];
          $message = $formdata['message'];

          $contactData = array(
              'name' => $name,
              'subject' => $subject,
              'email' => $email,
              'message' => $message
          );
          
          $id = $this->api_model->insert_contact($contactData);

          $this->sendemail($contactData);
          
          $response = array('id' => $id);
      }
      else {
          $response = array('id' => '');
      }
      
      $this->output
          ->set_content_type('application/json')
          ->set_output(json_encode($response));
  }

  public function sendemail($contactData)
  {
      $message = '<p>Hi, <br />Some one has submitted contact form.</p>';
      $message .= '<p><strong>Name: </strong>'.$contactData['name'].'</p>';
      $message .= '<p><strong>Subject: </strong>'.$contactData['subject'].'</p>';
      $message .= '<p><strong>Email: </strong>'.$contactData['email'].'</p>';
      $message .= '<p><strong>Massege: </strong>'.$contactData['message'].'</p>';
      $message .= '<br />Thanks';

      $this->load->library('email');

      $config['protocol'] = 'sendmail';
      $config['mailpath'] = '/usr/sbin/sendmail';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['mailtype'] = 'html';

      $this->email->initialize($config);

      $this->email->from('somarur8@gmail.com', 'RSGiTECH');
      $this->email->to('somarur8@gmail.com');
      $this->email->cc('somarur8@gmail.com');
      $this->email->bcc('somarur8@gmail.com');

      $this->email->subject('Contact Form');
      $this->email->message($message);

      $this->email->send();
  }
?>