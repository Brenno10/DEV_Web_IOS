class planet {
    constructor(name, size, texture) {
        this.name = name;
        this.size = size;
        this.texture = texture;
    }
}

const earth = new planet('earth', 10, './test.ts');
console.log(earth.size);
