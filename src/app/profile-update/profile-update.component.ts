import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@app/services/toast.service';
import { User } from '@app/models/user.model';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
  userForm!: FormGroup;
  user: User = {
    id: '',
    password: '',
    email: '',
    name: '',
  };
  userId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  loadForms() {
    this.userForm = this.fb.group({
      id: [''],
      role: [''],
      createdAt: [''],
      email: ['', Validators.email],
      name: ['', Validators.required],
    });
  }

  refresh(): void {
    if (confirm('Tem certeza de que deseja deslogar o usuário?')) {
      window.location.href = '/login';
    }
  }

  populateForms(user: User) {
    this.userForm.patchValue(user);
  }

  ngOnInit(): void {
    this.loadForms();

    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.userId = user.id;
      this.populateForms(user);
    });
  }

  updateUser() {
    console.log(this.userForm.value);
    this.userService.updateUser(this.userForm.value, this.userId).subscribe((user) => {
      if (confirm('Tem certeza de que deseja atualizar o usuário?')) {
        this.toastService.showMessage('Informações atualizadas com sucesso!');
      }
    });
  }
}
