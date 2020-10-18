const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  //inserir dados
  /*  await saveOrphanage(db, {
      lat: "-13.0091605",
      lng: "-38.4900261",
      name: "Lar da esperança",
      about: "Acolhimento de crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
      whatsapp: "98478523",
      images: [
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=1"
      ].toString(),
      instructions: "Traga muito amor, paciência e esperança para dar.",
      opening_hours: "Horário de visitas Das 10h até 16h",
      open_on_weekends: "0"
  
    })*/

  //consultar dados


  const selectedOrphanages = await db.all("SELECT *  FROM orphanages ")
  console.log(selectedOrphanages)


  // consultar somente um orphanage pelo id

  // const orphanage = await db.all('SELECT *  FROM orphanages WHERE id = "1" ')
  // console.log(orphanage)


  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
  //  console.log(await db.run("DELETE FROM orphanages WHERE id = '6' "))

})