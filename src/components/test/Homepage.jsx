import ComponentHeader from '@/components/layout/ComponentHeader'

function ListItem({ title }) {
    return <a title={title}>{title}</a>
}

export default function Homapage() {
    return (
        <>
            <ComponentHeader title={'왜 꺽쇠가..'} />
            <ListItem title={'<< 선유원가든 알바 모집 >>'} />
            <br />
            <ListItem title={'2캠퍼스 단기 아르바이트 모집 (01.17(금))'} />
        </>
    )
}
