import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef?: BsModalRef;
  fb!: FormGroup;
  @Output() dataPerson: EventEmitter<any> = new EventEmitter;

  constructor(
    private modalService: BsModalService,
    private fromBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.generateForm();
  }
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  generateForm() {
    this.fb = this.fromBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      vehicle: ['', [Validators.required]]
    })
  }

  createPerson(){
    this.dataPerson.emit(this.fb.value)
    this.modalRef?.hide()
    this.fb.reset()
    window.location.reload()
  }
}
