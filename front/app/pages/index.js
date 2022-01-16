import AxiosTest from '../components/Test/AxiosTest'
import CreateItem from '../components/Items/CreateItem'
import ItemList from '../components/Items/ItemList'

export default function Home() {
  return (
    <div>
      <AxiosTest />
      <CreateItem />
      <ItemList/>
    </div>
  )
}
