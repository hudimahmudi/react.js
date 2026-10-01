
//desctruct
//const siswa = {
  //    name: "hudayyy",
  //    nilai : 50
  //};
  //const {name, nilai} = siswa;
  //console.lo(name);
  //console.lo(nilai);
  
  // const [count, setCount] = useState(0)
  
  // //ngerubah data jadi dinamis dengan aksi
  // //getter, setter : count, setCount
  
  // function Peserta({nama, kelas, nilai}) {
    //   return (
      //     <div style={{border: "1px solid #0e0d0d", padding:"13px", borderRadius: "8px", margin:"8px"}}>
      //     <h3>{nama}</h3>
      //     <p>{kelas}</p>
      //     <p>{nilai}</p>
      
      //     </div>
      //   );
      // }
      
      // //props : property
      // return (
        //   <>
        //   <Peserta nama="sasssskeee" kelas="Jounin" nilai="90"/>
        //   <Peserta nama="nartoooo" kelas="Jounin" nilai="90"/>
        //   <Peserta nama="sasssskeee" kelas="Jounin" nilai="90"/>
        
        //   <p>Total Data : {count}</p>
        //   <button onClick={() => setCount(count +1)}>Tambah</button>
        //   <button onClick={() => setCount(count -1)}>Kurang</button>
        
        //   </>
        // );





        import { useState } from 'react'
        import heroImg from './assets/hero.png'
        import reactLogo from './assets/react.svg'
        import viteLogo from './assets/vite.svg'
        import './App.css'
        import { Peserta } from './component/Peserta'
        import DataPeserta from './component/DataPeserta'
        import FormPeserta from './component/FormPeserta'
        
        
        function App() {
          const [listPeserta, setListPeserta] = useState(Peserta);
          const [editPeserta, setEditPeserta] = useState(null)
          // const listPeserta = Peserta

      const handleSumbit = (DataPeserta) => {
        if(editPeserta) {
          setEditPeserta(listPeserta.map((item) => (item.id === DataPeserta.id ? DataPeserta : item)))
          setEditPeserta(null)
        } else {
          setEditPeserta([...listPeserta, DataPeserta]);
        }
        console.log(DataPeserta);
      };

      const handleHapus = (id) => {
        setListPeserta(listPeserta.filter((item) => item.id !== id));
        if(id === editPeserta.id){
          setListPeserta("null")
        }
      };

        return (
          <>
          <FormPeserta onSimpan={handleSumbit} pesertaEdit={editPeserta}/>
          {listPeserta.map((item) =>(
            <DataPeserta 
            key={item.id} 
            peserta={item} 
            onEdit={setEditPeserta} 
            onHapus={handleHapus}
             />
          ))}
          </>
        );
}

export default App
