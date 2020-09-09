import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-slider',
  styleUrl: 'wc-slider.css',
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
    // @ts-expect-error
    $(this.wcSlider).slick(this.config);
  }
  render() {
    return (
      <div>

        <div class="slider" ref={el => (this.wcSlider = el as HTMLElement)}>
          {this.contentData.map((item: any) => (
            <div>              
              <a href={item.url}>
                <img src={item.imgSrc} alt={item.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
