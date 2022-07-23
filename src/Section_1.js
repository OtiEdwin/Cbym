import './primitives.css'

function Section_1() {
    return(
        <section className='ratio-9 col'>
            <h2 className='tc mc head-text'><span className='dark h2'>&mdash;</span> Make a Choice</h2>
            <div className='row'>
                <div className='card prm-background ratio-3'>
                {/* <span class="material-symbols-outlined mbc primary md-72 tc">
                thumbs_up_down
                </span> */}
                <h3 className='tc'>A Better Future</h3>
                <p>
                    this is where the inspirational text goes, Let's inspire one another.
                </p>
                <a className='btn pill tc'>Let's go &rarr;</a>
                </div>

                <div className='card sec-background ratio-3'>
                {/* <span class="material-symbols-outlined mbc primary md-72 tc">
                groups_2
                </span> */}
                <h3 className='tc'>Let's Unite</h3>
                <p>
                    this is where the inspirational text goes, Let's inspire one another.
                </p>
                <a className='btn pill tc'>Let's go &rarr;</a>
                </div>

                <div className='card ter-background ratio-3'>
                {/* <span class="material-symbols-outlined mbc primary md-72 tc">
                connect_without_contact
                </span> */}

                <h3 className='tc'>A Safe Space</h3>
                <p>
                    this is where the inspirational text goes, Let's inspire one another.
                </p>
                <a className='btn pill tc'>Let's go &rarr;</a>
                </div>
            </div>
        </section>
    )
}
export default Section_1 