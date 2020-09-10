import { Component, h, Prop } from '@stencil/core';
import Glide from '@glidejs/glide'

@Component({
  tag: 'wc-slider',
  styleUrl: 'wc-slider.scss',
  shadow: true,
})
export class WorkCastSlider {
  wcSlider!: HTMLElement;

  @Prop() contentData: {
    url: string;
    imgSrc: string;
    alt: string;
  }[] = [];

  @Prop() config: any;

  componentDidRender() {
    new Glide(this.wcSlider, this.config).mount()
  }
  render() {
    return (
      <div class="glide" ref={el => (this.wcSlider = el as HTMLElement)}>
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            {this.contentData.map((item: any) => (
              <li class="glide__slide">
                <a href={item.url}>
                  <img src={item.imgSrc} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
