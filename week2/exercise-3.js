var nama = 'arif'
var peran = 'ksatria'

if (nama === '' && peran === '' || nama === ''){
  console.log('Nama harus diisi!')
}
else if (nama !== '' && peran === ''){
  console.log('Hallo '+ nama + ', Pilih peranmu untuk memulai game!')
}
else if (nama !== '' && peran === 'Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, '+nama)
  console.log('Halo Ksatria '+nama+ ', kamu dapat menyerang dengan senjatamu!')
}

else if (nama !== '' && peran === 'Tabib'){
  console.log('Selamat datang di Dunia Proxytia, '+nama)
  console.log('Halo Tabib '+nama +', kamu akan membantu temanmu yang terluka.')
}

else if (nama !== '' && peran === 'Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, '+nama)
  console.log('Halo Penyihir '+nama +', ciptakan keajaiban yang membantu kemenanganmu!')
}
else{
  console.log('Tidak ada peran tersebut, Peran yang tersedia adalah: "Tabib", "Ksatria","Penyihir"')
}