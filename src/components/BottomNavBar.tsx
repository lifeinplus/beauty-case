import {
    PaintBrushIcon,
    HomeIcon,
    ListBulletIcon,
} from '@heroicons/react/24/outline'

const BottomNavBar = () => (
    <aside className="fixed bottom-0 left-0 z-20 flex w-full border-t border-gray-700 bg-black text-white sm:h-full sm:w-auto sm:flex-col sm:border-e sm:border-t-0 sm:px-3 sm:pb-5 sm:pt-2">
        <div className="hidden flex-col items-center justify-center p-3 pb-6 sm:flex">
            <h1 className="font-logo text-2xl font-bold">
                <a href="/">B</a>
            </h1>
        </div>
        <div className="flex w-full flex-row justify-evenly sm:flex-col sm:justify-start">
            <button
                className="flex flex-col items-center p-3 hover:text-rose-400"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <HomeIcon className="h-6 w-6" />
                <span className="sr-only">Начало</span>
            </button>

            <button
                className="flex flex-col items-center p-3 hover:text-rose-400"
                onClick={() =>
                    document
                        .getElementById('stages')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }
            >
                <ListBulletIcon className="h-6 w-6" />
                <span className="sr-only">Этапы</span>
            </button>

            <button
                className="flex flex-col items-center p-3 hover:text-rose-400"
                onClick={() =>
                    document
                        .getElementById('brushes')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }
            >
                <PaintBrushIcon className="h-6 w-6" />
                <span className="sr-only">Кисти</span>
            </button>
        </div>
    </aside>
)

export default BottomNavBar
