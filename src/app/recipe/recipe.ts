import { Component } from '@angular/core';


@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.html',
  styleUrls: ['./recipe.css']
})
export class Recipe {

  data = [
    {rank:1,title:"Chicken salad",   imageUrl:"https://i.pinimg.com/736x/cf/b5/f5/cfb5f5722c374665e441555b3d83e0bc.jpg"},
    {rank:2,title:"Beef Salad",   imageUrl:"https://i.pinimg.com/1200x/49/46/45/494645e38a813998479d41cf23733889.jpg"},
    {rank:3,title:"Lard Tuna",   imageUrl:"https://i.pinimg.com/736x/24/f3/cc/24f3ccb86f6192d7fad2192cfe25632a.jpg"}
  ]
    popularMenuData = [
    { title: "Mushroom Salad", views: "1,234 views", imageUrl: "https://i.pinimg.com/1200x/5f/0c/92/5f0c92b372ec2f781fd54b740bf6e6cd.jpg" },
    { title: "Mixed Berry Salad", views: "1,009 views", imageUrl: "https://i.pinimg.com/1200x/6c/7f/6f/6c7f6feb1f937661f509768e212c21f2.jpg" },
    { title: "Lentil Loaf", views: "988 views", imageUrl: "https://i.pinimg.com/1200x/c3/f2/93/c3f293038fe3418ea5a2564547bcefd0.jpg" },
    { title: "Scallops, Snow Peas", views: "854 views", imageUrl: "https://i.pinimg.com/736x/8f/dd/57/8fdd574d42642bc61edd046176433eec.jpg" },
    { title: "Dill Chicken Soup", views: "840 views", imageUrl: "https://i.pinimg.com/1200x/82/65/73/826573a0b29c36fbfafb83094cfb4305.jpg" },
    { title: "Bean and Bacon Soup", views: "701 views", imageUrl: "https://i.pinimg.com/736x/2b/92/c5/2b92c55866f8cd8bbaea3fcaab75ef94.jpg" },
  ]
}
