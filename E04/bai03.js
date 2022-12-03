function xinChao(ten, namSinh)
{
    console.log(`Xin chào, mình tên là ${ten}`)
    console.log(`Mình sinh nam ${namSinh}`)
    console.log("Nice to meet you");

    const tuoi = new Date().getFullYear() - namSinh;

    return tuoi
}

let x = xinChao("Huy", 2003);

console.log(x)

console.log(xinChao("Huy", 2007))

xinChao("Huy", 2009)