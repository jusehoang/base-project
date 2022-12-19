import { Blog } from './../../../@core/models/blog.model';
import { Component, OnInit } from '@angular/core';

export type arrayBlog = Blog[];

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  carouselSlides: arrayBlog[] = [
    [
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
    ],
    [
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
      {
      id: '1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/12/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg',
      title: 'Digital Jumping-Seconds Display',
      createdDate: new Date('2022-12-19T15:48:29.695Z')
      },
    ],
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
