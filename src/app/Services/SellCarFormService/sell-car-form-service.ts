import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { MakeService } from '../MakeService/make-service';
import { IMakeList } from '../../Interfaces/Makes';
import { ISelectOptions } from '../../Interfaces/Shared';
import { ModelService } from '../ModelService/model-service';
import { BehaviorSubject, forkJoin, map, Observable, switchMap } from 'rxjs';
import { IModelList } from '../../Interfaces/Model';
import { LocationService } from '../LocationService/location-service';
import { ICity, IState } from '../../Interfaces/Location';
import { UserService } from '../UserService/user-service';
import { IUser } from '../../Interfaces/User';
import { FormService } from '../FormService/form-service';
import { IFeatures } from '../../Interfaces/Form';
import { IMultipleImages } from '../../Interfaces/Car/SellCar';
import { ICreateCarRequestBody } from '../../Interfaces/Car/Car';
import { CheckBoolean } from '../../Utils/CheckBoolean';
import { IImageRequestBody } from '../../Interfaces/Image';
import { CarService } from '../CarService/car-service';
import { ImageService } from '../ImageService/image-service';


@Injectable()

export class SellCarFormService {

  /**
   *
   */
  constructor(
    private readonly _MakeService: MakeService,
    private readonly _ModelService: ModelService,
    private readonly _LocationService: LocationService,
    private readonly _UserService: UserService,
    private readonly _FormService: FormService,
    private readonly _CarService: CarService,
    private readonly _ImageService: ImageService
  ) {

  }

  sellCarForm = new FormGroup({
    makeName: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    modelName: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    year: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    transmission: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    drivetrain: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    engine: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    mileage: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    carImages: new FormControl<File[]>([], { nonNullable: true }),
    defaultImage: new FormControl<File | null>(null, { validators: [Validators.required] }),
    exteriorColor: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    exteriorColorCode: new FormControl("", { nonNullable: true }),
    interiorColor: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    interiorColorCode: new FormControl("", { nonNullable: true }),
    condition: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    accident: new FormControl("No", { nonNullable: true, validators: [Validators.required] }),
    cleanHistory: new FormControl("No", { nonNullable: true, validators: [Validators.required] }),
    hasIssues: new FormControl("No", { nonNullable: true, validators: [Validators.required] }),
    comment: new FormControl("", { nonNullable: true }),
    state: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    city: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    vin: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl("", { nonNullable: true }),
    location: new FormControl("", { nonNullable: true }),
    phoneNumber: new FormControl("", { nonNullable: true }),
    seller: new FormControl("", { nonNullable: true }),
    features: new FormControl<string[]>([], { nonNullable: true }),
    streetAddress: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    zipCode: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    numberOwners: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    hasPayments: new FormControl("No", { nonNullable: true, validators: [Validators.required] }),
    numberKeys: new FormControl("", { nonNullable: true, validators: [Validators.required] })
  });

  features!: IFeatures[]
  _makeOptions = new BehaviorSubject<ISelectOptions[]>([]);
  makeOptions$ = this._makeOptions.asObservable();
  makeSelected = "";

  _modelOptions = new BehaviorSubject<ISelectOptions[]>([]);
  modelOptions$ = this._modelOptions.asObservable();

  public multipleImages: IMultipleImages[] = [];
  public defaultImagePreviewUrl!: string;
  public submitted = false;
  private modelListData: IModelList[] = [];
  private makeListData: IMakeList[] = [];


  public getMakeOptions() {
    this._MakeService.getMakeNameList()
      .subscribe(value => {
        this.makeListData = value;
        const data: ISelectOptions[] = value.map(val => ({
          label: val.makeName,
          value: val.makeName
        }))
        this._makeOptions.next(data)
      });
  }

  public getModelOptions() {
    this._ModelService.getModelList(this.makeSelected)
      .subscribe(value => {
        this.modelListData = value;
        const data: ISelectOptions[] = value.map(val => ({
          label: val.modelName,
          value: val.modelName
        }))
        this._modelOptions.next(data)
      });
  }

  public getStateOptions(): Observable<IState[]> {
    return this._LocationService.getStates();
  }

  setDefaultImage(file: File) {
    this.sellCarForm.patchValue({ defaultImage: file })
  }

  setMultipleImages(files: File[]) {
    this.sellCarForm.patchValue({ carImages: files })
  }

  public getCities(city: string): Observable<ICity[]> {
    return this._LocationService.getCities(city);
  }

  public getFeatures() {
    this._FormService.getFeatures();
  }

  public setUser() {
    this._UserService.getUser()
      .subscribe(data => {
        if (data) {
          this.sellCarForm.patchValue({
            email: data.email,
            phoneNumber: data.phoneNumber,
            location: "Riverside, California",
            seller: `${data.firstName} ${data.lastName}`
          })
        }
      })
  }

  submitCar() {
    this.submitted = true;
    this.sellCarForm.markAllAsTouched();

    if (this.sellCarForm.invalid) {
      return;
    }

    const formData = this.sellCarForm.getRawValue();
    const defaultImage = formData.defaultImage ?? new File([], "test");
    const modelData = this.modelListData.find(model => model.modelName = formData.modelName);
    const makeData = this.makeListData.find(make => make.makeName = formData.makeName);
    const images: File[] = [defaultImage, ...formData.carImages];
    const imageData: IImageRequestBody[] = [
      {
        fileSize: defaultImage.size,
        fileExtension: defaultImage.type,
        fileName: defaultImage.name,
        defaultImage: true,
        position: -1
      },
      ...formData.carImages.map((ci, idx) => ({
        fileSize: ci.size,
        fileExtension: ci.type,
        fileName: ci.name,
        defaultImage: false,
        position: idx
      }))
    ];


    const requestBody: ICreateCarRequestBody = {
      makeName: formData.makeName,
      modelName: formData.modelName,
      year: +formData.year,
      exteriorColor: formData.exteriorColor,
      exteriorColorCode: formData.exteriorColorCode,
      interiorColorCode: formData.interiorColorCode,
      interiorColor: formData.interiorColor,
      drivetrain: formData.drivetrain,
      transmission: formData.transmission,
      engine: formData.engine,
      mileage: formData.mileage,
      address: {
        streetAddress: formData.streetAddress,
        zipCode: formData.zipCode,
        city: formData.city,
        state: formData.state
      },
      numberOwners: +formData.numberOwners,
      hasPayments: CheckBoolean(formData.hasPayments),
      numberKeys: +formData.numberKeys,
      price: +formData.price,
      condition: formData.interiorColorCode,
      accident: CheckBoolean(formData.accident),
      hasHistory: CheckBoolean(formData.cleanHistory),
      hasIssues: CheckBoolean(formData.hasIssues),
      featureCodes: formData.features,
      comment: formData.comment,
      vin: formData.vin,
      submitType: 'submit',
      bodyType: modelData?.bodyType ?? "",
      makeCode: makeData?.makeCode ?? "",
      modelCode: modelData?.modelCode ?? ""
    }

    this._CarService.createCar(requestBody)
      .pipe(
        switchMap(car => this._ImageService.getPresignedUrl(formData.carImages.length + 1)
          .pipe(map(urls => ({ car, urls })))),
        switchMap(res => forkJoin(res.urls.map((url, idx) => {
          imageData[idx].fileName = url.key;
          return this._ImageService.uploadCarImagesS3(url.presignedUrl, images[idx])
        }))
        .pipe(map(res2 => ({ carData: res.car })))),
        switchMap(res=>this._ImageService.createMultipleImages(res.carData.carCode, imageData))
      ).subscribe(data => {
        console.log(data);
        alert("Data saved")
      })
  }

  hasErrors(controlName: keyof typeof this.sellCarForm.controls): boolean {
    const control = this.sellCarForm.controls[controlName];

    const errors = control.errors;

    if (!errors || !control.touched) return false;


    return Object.keys(errors).length > 0;
  }

  checkErrors(controlName: keyof typeof this.sellCarForm.controls): string {
    const errors = this.sellCarForm.controls[controlName].errors;
    if (errors?.['required']) {
      return "Field is required"
    }
    else if (errors?.['minlength']) {
      return `Field must have at least ${errors?.['minlength'].requiredLength} characters`
    }
    return "";
  }
}
