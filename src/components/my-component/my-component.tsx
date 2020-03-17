import { Component, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';

interface Student {
  name: string
  age: number
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;
  @State() student: Array<Student> = []

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  setName = () => {
    const student = this.student;
    student.push({
      name: 'bap1',
      age: 1
    })
    this.student = JSON.parse(JSON.stringify(student));
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <p onClick={this.setName}>
          Hello, World! I'm {this.getText()}
        </p>
      </div>

    )
  }
}
