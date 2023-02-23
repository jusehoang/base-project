import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Product = {
    id: '5',
    name: 'TISSOT LE LOCLE T006 AUTO WATCH 39MM',
    price: 1590000,
    image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-480x480.jpg',
    isSale: true,
    priceSale: 9540000,
    discountPercentage: 40,
    code: '83399-1',
    categorys: [
      {
        id: '1',
        name: 'Đồng hồ cặp đôi'
      },
      {
        id: '2',
        name: 'Đồng hồ nam'
      },
      {
        id: '3',
        name: 'Sản phẩm hot'
      },
    ],
    description: '<p>Floating like a balloon and as blue as the cabochon safely nestled in its side, the Ballon Bleu watch by Cartier adds a dash of elegance to male and female wrists alike. Roman numerals are guided on their path by a deep blue winding mechanism. With the convex curves of the case, guilloché dial, sword-shaped hands, and polished or satin-finish links of the bracelet…the Ballon Bleu watch by Cartier floats through the world of Cartier watchmaking.</p><ul><li>Ballon Bleu de Cartier watch.</li><li>Mechanical movement with automatic winding.</li><li>Steel case, fluted crown decorated with a synthetic spinel cabochon, silvered guilloché opaline dial, Roman numerals, blued-steel sword-shaped hands.</li><li>Sapphire crystal.</li><li>Steel bracelet.</li><li>Case dimensions diameter: 33 mm.</li><li>Thickness: 9.96 mm.</li><li>Water-resistant to 3 bar (approx. 30 meters/100 feet).</li></ul><p><br></p>'
  }
  quantity = 1;
  totalEvaluate = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
