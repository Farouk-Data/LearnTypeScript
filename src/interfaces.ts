
//can have methods
interface inter {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId ?: string,
    myMethod: () => string;
    secondMethod(): number 
}

//can add new elems to the interface
//reopening of the interface

interface inter {
    githubToken: string
}

const newInter: inter = {dbId: 69, email: "str", 
                        userId: 420,
                        githubToken: "tok",
                        myMethod: () => {
                            return ("Method return string");
                        },
                        secondMethod(): number {
                            return (69);
                        }
}

//Inheritance
interface inheritInter extends inter {
    role: "inherit" | "inherit 2"
}

const newInter2:inheritInter = {dbId: 69, email: "str", 
                        userId: 420,
                        githubToken: "tok",
                        role: "inherit",
                        myMethod: () => {
                            return ("Method return string");
                        },
                        secondMethod(): number {
                            return (69);
                        }
}
