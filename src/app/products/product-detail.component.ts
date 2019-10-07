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
  errorMessage: string = '';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;// '+' converts string to num
      this.getProduct(id);
    }
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }
  onBack(): void {
    this.router.navigate(['/products'])
  }
}
