import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	selectedFile: File;
	form: FormGroup;                    
	private formSubmitAttempt: boolean;
	status: string;
	hideStatus: boolean=true;
	hideSpinner: boolean = true;

	constructor(private uploadService: UploadService,  private fb: FormBuilder, ) { }

	ngOnInit() {
		 this.form = this.fb.group({     // {5}
		 	uploadKey: ['', Validators.required],
		 	scheduleFile: [undefined, Validators.required]
		 });
		}

		onFileChanged(event) {
			this.selectedFile = event.target.files[0]
		}

		onSubmit() {
			

			if (this.form.valid) {
				this.status =   "Uploading..."
				this.hideStatus = false;
				this.hideSpinner = false;
				const uploadData = new FormData();
				uploadData.append('scheduleFile', this.selectedFile, this.selectedFile.name);
				uploadData.append('secretKey', this.form.get("uploadKey").value);
				this.uploadService.uploadNewSchedule(uploadData)
				.subscribe(event => {
					console.log("event", event); 
					this.hideSpinner = true;
					this.formSubmitAttempt = false;
					this.status = event == "SUCCESS" ? "Successfully Uploaded": " An error was encountered!" 


				});

			}
			this.formSubmitAttempt = true;    
		}


		isFieldInvalid(field: string) { 

			let notValidAndTouched: boolean = (!this.form.get(field).valid && this.form.get(field).touched); 
			let unTouchedAndSubmitted: boolean = this.form.get(field).untouched && this.formSubmitAttempt;
			return notValidAndTouched || unTouchedAndSubmitted;

		}




	}
