import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  data: string;
  toggle: boolean = false;
  ckeditorContent
  clickButton() {
    this.data = this.ckeditorContent;
    console.log("ck", this.data);

    this.toggle = true;
    this.ckeditorContent = undefined;
    console.log("vk", this.ckeditorContent);
  }
  // public editor = ClassicEditor;
  // data: any = `<p>I am vaibhaw </p>`;
  // config = {
  //   toolbar: [
  //     'undo',
  //     'redo',
  //     '|',
  //     'heading',
  //     'fontFamily',
  //     'fontSize',
  //     '|',
  //     'bold',
  //     'italic',
  //     'underline',
  //     'fontColor',
  //     'fontBackgroundColor',
  //     'highlight',
  //     '|',
  //     'link',
  //     'CKFinder',
  //     'imageUpload',
  //     'mediaEmbed',
  //     '|',
  //     'alignment',
  //     'bulletedList',
  //     'numberedList',
  //     '|',
  //     'indent',
  //     'outdent',
  //     '|',
  //     'insertTable',
  //     'blockQuote',
  //     'specialCharacters'
  //   ],
  //   language: 'id',
  //   image: {
  //     toolbar: [
  //       'imageTextAlternative',
  //       'imageStyle:full',
  //       'imageStyle:side'
  //     ]
  //   },
  // }

}
