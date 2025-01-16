import Review from '@/components/aaron/Review'
import AaronLecture1 from '@/components/aaron/AaronLecture1'
import AaronLecture2 from '@/components/aaron/AaronLecture2'
import AaronLecture3 from '@/components/aaron/AaronLecture3'
import AaronLecture4 from '@/components/aaron/AaronLecture4'
import AaronLecture5 from '@/components/aaron/AaronLecture5'
import AaronLecture6 from '@/components/aaron/AaronLecture6'
// import '@/routes/pages/App.css'

export default function Aaron() {
    return (
        <div className='container'>
            <div className='container-item'>
                <Review />
            </div>
            <div className='container-item'>
                <AaronLecture1 />
            </div>
            <div className='container-item'>
                <AaronLecture2 />
            </div>
            <div className='container-item'>
                <AaronLecture3 />
            </div>
            <div className='container-item'>
                <AaronLecture4 />
            </div>
            <div className='container-item'>
                <AaronLecture5 />
            </div>
            <div className='container-item'>
                <AaronLecture6 />
            </div>
        </div>
    )
}
