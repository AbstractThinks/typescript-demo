> 当使用外部JavaScript库或新的宿主API时，你需要一个声明文件（.d.ts）定义程序库的shape。 这个手册包含了写.d.ts文件的高级概念，并带有一些例子，告诉你怎么去写一个声明文件。


```javascript

animalFactory.create("dog");
animalFactory.create("giraffe", { name: "ronald" });
animalFactory.create("panda", { name: "bob", height: 400 });
animalFactory.create("cat", { height: 32 });


namespace animalFactory {
    interface AnimalOptions {
        name: string;
        height?: number;
        weight?: number;
    }
    function create(name: string, animalOptions?: AnimalOptions): Animal;
}

```
