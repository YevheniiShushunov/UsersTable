import { Injectable } from '@angular/core';
import { IUser } from './table.interface';

const list = [
  {
    "_id": "5c35cd619a43410219512a43",
    "guid": "61533c00-baea-410c-81be-424d59cfd19c",
    "isActive": false,
    "balance": "$3,828.67",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Kimberly Chavez",
    "gender": "female",
    "company": "VORATAK",
    "email": "kimberlychavez@voratak.com",
    "phone": "+1 (927) 495-3329",
    "address": "850 Croton Loop, Saticoy, California, 5303",
    "about": "Duis pariatur sit elit proident ut eiusmod sint laborum et ad duis aliquip in. Aute quis eu elit ex do est magna consectetur mollit deserunt exercitation ipsum pariatur ad. Mollit consectetur ullamco aliquip quis qui amet ea aliquip. Labore aliqua veniam id nulla et sunt proident enim anim. Non cillum pariatur esse labore mollit proident in labore enim. Amet minim dolor dolore laborum nulla.\r\n",
    "registered": "2021-12-09T14:41:29.341Z",
    "latitude": -12.467538,
    "longitude": 14.314712,
    "tags": [
      "occaecat",
      "mollit",
      "anim",
      "voluptate",
      "dolore",
      "sunt",
      "ea"
    ]
  },
  {
    "_id": "5c35cd61b36a43da3bea4fae",
    "guid": "fff2e2ef-e6ab-4034-9071-84a201c4a631",
    "isActive": true,
    "balance": "$3,684.58",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Dillard Wilkerson",
    "gender": "male",
    "company": "NAMEBOX",
    "email": "dillardwilkerson@namebox.com",
    "phone": "+1 (840) 510-2244",
    "address": "323 Montague Terrace, Fillmore, Northern Mariana Islands, 4551",
    "about": "Pariatur in id ad nostrud ad incididunt non est. Nisi culpa ullamco eiusmod eiusmod minim eu. Consectetur dolor nostrud qui aliqua.\r\n",
    "registered": "2021-12-09T12:35:29.341Z",
    "latitude": -62.867176,
    "longitude": 148.912369,
    "tags": [
      "culpa",
      "velit",
      "adipisicing",
      "et",
      "incididunt",
      "culpa",
      "laborum"
    ]
  },
  {
    "_id": "5c35cd617d6ad9306b978de9",
    "guid": "687e94aa-1923-4be0-8fce-8e011b8e9a88",
    "isActive": false,
    "balance": "$3,410.27",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Scott Mann",
    "gender": "male",
    "company": "ORBIFLEX",
    "email": "scottmann@orbiflex.com",
    "phone": "+1 (904) 497-2520",
    "address": "828 Williamsburg Street, Walland, Michigan, 487",
    "about": "Aliqua aliquip quis nostrud aute nostrud ut quis aute mollit. Eu et esse voluptate nulla cupidatat eu ut laborum consequat tempor ad do. Velit occaecat cupidatat laboris ea deserunt.\r\n",
    "registered": "2021-12-10T12:11:00.341Z",
    "latitude": 26.9417,
    "longitude": 53.353221,
    "tags": [
      "reprehenderit",
      "ut",
      "sit",
      "esse",
      "aliquip",
      "tempor",
      "ipsum"
    ]
  },
  {
    "_id": "5c35cd6180151866672ba858",
    "guid": "bc6b64c5-7ba8-40bf-a273-5bac46ec0683",
    "isActive": false,
    "balance": "$3,116.89",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": "Britt Page",
    "gender": "male",
    "company": "NURALI",
    "email": "brittpage@nurali.com",
    "phone": "+1 (901) 445-2071",
    "address": "851 Harbor Lane, Robbins, Marshall Islands, 4810",
    "about": "Elit adipisicing eu do ipsum deserunt ea. Sit magna id fugiat exercitation consectetur proident qui est eiusmod consequat dolore. Amet sint ut culpa elit consectetur ex velit ut irure ea proident nisi dolore.\r\n",
    "registered": "2021-12-08T10:51:19.341Z",
    "latitude": -29.183154,
    "longitude": 8.785211,
    "tags": [
      "est",
      "anim",
      "ipsum",
      "cillum",
      "sunt",
      "nisi",
      "reprehenderit"
    ]
  },
  {
    "_id": "5c35cd61c12c17c55fda4542",
    "guid": "3ed50653-9bd2-4e70-bde3-fdc9f6a8b84f",
    "isActive": false,
    "balance": "$2,265.52",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Sparks Dunlap",
    "gender": "male",
    "company": "GEEKY",
    "email": "sparksdunlap@geeky.com",
    "phone": "+1 (980) 514-3379",
    "address": "639 Woodside Avenue, Richford, Wyoming, 4044",
    "about": "Aute amet voluptate non ullamco cillum incididunt in ullamco sunt deserunt. Esse pariatur do cillum aute ipsum dolore Lorem aliquip sit cillum est. Anim veniam est eu fugiat elit sit sint consequat. Aliquip enim eu commodo ullamco anim deserunt velit culpa laboris occaecat pariatur. Adipisicing mollit veniam do magna sunt ex. Ad deserunt ad laborum occaecat elit laborum.\r\n",
    "registered": "2021-12-07T12:10:00.341Z",
    "latitude": 47.880863,
    "longitude": -167.609164,
    "tags": [
      "enim",
      "anim",
      "aute",
      "deserunt",
      "deserunt",
      "aliquip",
      "qui"
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class TableService {
  users = list;
  user?:IUser;
  

  constructor() { }

  getUserById(id:string):void{
    this.users.filter( item => item._id === id ? this.user = item : id)
    localStorage.setItem("id", id)
  }
}
