import Review from '@/components/Review'
import './App.css'
import Work2 from '@/components/Work2'
import Work3 from '@/components/Work3'
import Work4 from '@/components/Work4'
import Work5 from '@/components/Work5'
import Work6 from '@/components/Work6'
import Work9 from '@/components/Work9'
import Work10 from '@/components/Work10'
import AaronLecture1 from '@/components/AaronLecture1'
import AaronLecture2 from '@/components/AaronLecture2'

function App() {
    return (
        <div className='container'>
            <div className='container-item'>
                <Work2 />
            </div>
            <div className='container-item'>
                <Work3 />
            </div>
            <div className='container-item'>
                <Work4 />
            </div>
            <div className='container-item'>
                <Work5 />
            </div>
            <div className='container-item'>
                <Work6 />
            </div>
            <div className='container-item'>
                <Review />
            </div>
            <div className='container-item'>
                <Work9 />
            </div>
            <div className='container-item'>
                <Work10 />
            </div>
            <div className='container-item'>
                <AaronLecture1 />
            </div>
            <div className='container-item'>
                <AaronLecture2 />
            </div>
        </div>
    )
}

export default App
