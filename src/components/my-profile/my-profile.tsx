import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-profile',
  styleUrl: 'my-profile.scss'
})
export class MyProfile {

  @Prop() first: string;

  @Prop() last: string;

  @Prop() photo: string;

  render() {
    return (
        <div class="row">
        <div class="col s4 m2">
          <div class="card">
            <div class="card-image">
              <img src={this.photo} />
              <span class="card-title">{this.first}  {this.last}</span>
            </div>
            <div class="card-content">
              <p>Hello, I'm an enthusiastic developer on mobile development and web technologies.</p>
            </div>
            <div class="card-action">
              <a href="http://github.com/GuilhermeSanches">Go to Github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
