import React from 'react'

const SofaCollection = () => {
    return (
        <section id="sofa-collection">
            <div class="owl-carousel owl-theme" id="collection-carousel">
                <div class="sofa-collection collectionbg1" style={{
                    backgroundImage: 'url(/assets/images/collection/sofa-collection-banner.jpg)no-repeat'
                }}>
                    <div class="container">
                        <div class="sofa-collection-txt">
                            <h2>unlimited sofa collection</h2>
                            <p>
                            Sofa adalah tempat yang paling nyaman untuk berbaring dan duduk, banyak yang menjadikannya tujuan terakhir saat sedang berpergian. Tetapi seiring berjalannya waktu, harganya kian tak terjangkau. Kami hadir dengan terobosan baru, berbagai tipe dan harga terjangkau kami siapkan untuk anda. Dapatkan promo potongan harga 5% untuk 30 pembeli pertama. Tunggu apa lagi, miliki sofa idaman dengan harga impian.
                            </p>
                            <div class="sofa-collection-price">
                                <h4>strting from <span>$ 199</span></h4>
                            </div>
                            <button class="btn-cart welcome-add-cart sofa-collection-btn"
                                onclick="window.location.href='#'">
                                view more
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!--/.sofa-collection--> */}
                <div class="sofa-collection collectionbg2"
                    style={{
                        backgroundImage: 'url(/assets/images/collection/table-banner.jpg)no-repeat'
                    }}
                >
                    <div class="container">
                        <div class="sofa-collection-txt">
                            <h2>unlimited dainning table collection</h2>
                            <p>
                            Sofa adalah tempat yang paling nyaman untuk berbaring dan duduk, banyak yang menjadikannya tujuan terakhir saat sedang berpergian. Tetapi seiring berjalannya waktu, harganya kian tak terjangkau. Kami hadir dengan terobosan baru, berbagai tipe dan harga terjangkau kami siapkan untuk anda. Dapatkan promo potongan harga 5% untuk 30 pembeli pertama. Tunggu apa lagi, miliki sofa idaman dengan harga impian.
                            </p>
                            <div class="sofa-collection-price">
                                <h4>strting from <span>$ 299</span></h4>
                            </div>
                            <button class="btn-cart welcome-add-cart sofa-collection-btn"
                                onclick="window.location.href='#'">
                                view more
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!--/.sofa-collection--> */}
            </div>
            {/* <!--/.collection-carousel--> */}

        </section>
    )
}

export default SofaCollection