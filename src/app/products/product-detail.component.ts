import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  imageWidth: number = 200;
  // imagePadding: number = 20;
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router, private products: ProductService) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');// '+' converts string to num
    this.products.getProducts().subscribe({
      next: (products) => {
        this.product = this.filterProduct(products, id);
      }
    })
  }
  filterProduct(products: IProduct[], id: number) {
    return products.find(product => product.productId === id)
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }
}
