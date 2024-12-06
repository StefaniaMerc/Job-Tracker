import * as React from 'react';
import AccumulationDoughnut from './AccumulationDoughnut'
import Donut from './Donut'
import Barchart from './Barchart'

export default function Dashboard(){
    return (
        
        <section className='dashboard'>
            {/* <div className='AccDough'>
                <AccumulationDoughnut />
            </div> */}
            <div className='AccDough'>
                <Donut />
            </div>
            <div className='barchart'>
                <Barchart />
            </div>
            <div className='barchart'>
                <Barchart />
            </div>
            <div className='barchart'>
                <Barchart />
            </div>
            <div className='barchart'>
                <Barchart />
            </div>
            <div className='barchart'>
                <Barchart />
            </div>
        </section>
    );
}