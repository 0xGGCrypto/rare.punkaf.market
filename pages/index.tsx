import { RobeInfo, fetchRobes } from './api/robes'
import { format as ts } from 'timeago.js'

export async function getStaticProps() {
  const data = await fetchRobes()
  return {
    props: {
      robes: data.robes,
      lastUpdate: data.lastUpdate,
    },
    revalidate: 300,
  }
}

interface Props {
  robes: RobeInfo[]
  lastUpdate: string
}

const Robe = ({ robe }: { robe: RobeInfo }) => {
  return (
    <a href={robe.url} target="_blank">
      <div className="m-auto pb-4 mb-8 flex flex-col justify-center items-center gap-2 p-4 md:m-4 border border-white transform hover:scale-105 transition-all bg-black w-full md:w-96">
        <img src={robe.svg} alt="" width="350" height="350" />
        <div className="text-center">
          <p className="text-lg">#{robe.id}</p>
          <p>{robe.price} ETH</p>
        </div>
      </div>
    </a>
  )
}

const IndexPage = ({ robes, lastUpdate }: Props) => {
  return (
    <div className="py-3 md:pb-0 font-mono flex flex-col justify-center items-center gap-4 pt-10 md:w-screen">
        <p className="md:text-lg pt-2">
          {' '}
          <a
            target="_self"
            href="https://rare.punkaf.market/"
            className="underline"
          >
            Rare AF
          </a>
          
           |  
           
          <a
            target="_self"
            href="https://1337.punkaf.market/"
            className="underline"
          >
            +1 Elite Gear
          </a>
          
           |  
          
          <a
            target="_self"
            href="https://hoodies.punkaf.market/"
            className="underline"
          >
            Hoodie Gang
          </a>
          
           |  
          
          <a
            target="_self"
            href="https://holo.punkaf.market/"
            className="underline"
          >
            Holo Hands
          </a>
          
           |  
          
          <a
            target="_self"
            href="https://katanas.punkaf.market/"
            className="underline"
          >
            Katanas
          </a>
           
           |  
          
          <a
            target="_self"
            href="https://ar.punkaf.market/"
            className="underline"
          >
            Assault Rifles
          </a>

      </p>
      <h1 className="text-lg md:text-3xl">Top 1000 Rarity</h1>
      <div className="text-center max-w-screen-md md:leading-loose">
        <p className="md:text-xl">
          There are {robes.length} <strong>top 1000 rares</strong> on sale. The floor
          price is {robes[0].price} ETH.        
        </p>
        <p className="md:text-lg pt-2">
          Original robes.market site by{' '}
          <a
            target="_blank"
            href="https://twitter.com/worm_emoji"
            className="underline"
          >
            worm_emoji
          </a>
          . punkaf.market by{' '}
          <a
            target="_blank"
            href="https://twitter.com/ggcrypto"
            className="underline"
          >
            GGCrypto
          </a>
          .
        </p>
        <p className="text-sm mv-4">Last updated {ts(lastUpdate)}</p>
      </div>
      <div className="grid md:grid-cols-2 pt-5">
        {robes.map((robe) => {
          return <Robe robe={robe} key={robe.id} />
        })}
      </div>
    </div>
  )
}

export default IndexPage
