<?php
  public function insert_contact($contactData)
  {
      $this->json->insert('product', $contactData);
      return $this->json->insert_id();
  }
?>
