function wrapping(gifts) {
    // const envueltos = []
    // for(const gift of gifts){
    //   const tapaSuperior = '*'.repeat(gift.length + 2);
    //   const tapaSuperior = '*'.repeat(gift.length + 2);
    //   envueltos.push(`${ tapaSuperior }\n*${ gift }*\n${ tapaInferior }`)
    // }
    // return envueltos;
    return gifts.map(gift => {
        const wrap = '*'.repeat(gift.length + 2);
        return `${ wrap }\n*${ gift }*\n${ wrap }`;
    });
}
