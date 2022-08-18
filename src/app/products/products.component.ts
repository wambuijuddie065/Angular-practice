import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  constructor() { }
  products:ProductInterface[]=[

    {
      name:"Laptop",
      url:"https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__480.jpg",
      sellingPrice:200,
      inStock:true
    },
    {
      name:"Desktop",
      url:"https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__480.jpg",
      sellingPrice:200,
      inStock:true
    },
    {
      name:"Flash",
      url:"https://cdn.pixabay.com/photo/2012/04/15/20/02/usb-35131__480.png",
      sellingPrice:200,
      inStock:false
    },
    {
      name:"Keyboard",
      url:"https://cdn.pixabay.com/photo/2019/05/27/22/56/planner-4233900__480.jpg",
      sellingPrice:200,
      inStock:true
    },
    {
      name:"Mouse",
      url:"https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249__480.png",
      sellingPrice:200,
      inStock:true
    },
    {
      name:"Hard Disk",
      url:"https://cdn.pixabay.com/photo/2013/07/12/19/16/hdd-154463__480.png",
      sellingPrice:200,
      inStock:false
    },
    {
      name:"Headphones",
      url:"https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
      sellingPrice:200,
      inStock:true
    }
    
  ]
  day=new Date().getDay()

 
}
