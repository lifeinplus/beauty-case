import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../app/hooks'
import { getErrorMessage } from '../../../utils'
import { clearFormData } from '../../form'
import LessonForm from '../components/LessonForm'
import { useAddLessonMutation } from '../lessonsApiSlice'
import { Lesson } from '../types'

export const LessonAddPage = () => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const [createLesson] = useAddLessonMutation()

    const handleAddLesson = async (lesson: Lesson) => {
        try {
            await createLesson(lesson).unwrap()
            dispatch(clearFormData())
            navigate('/lessons')
        } catch (error) {
            console.error(error)
            toast.error(getErrorMessage(error))
        }
    }

    return <LessonForm onSubmit={handleAddLesson} title={'Добавить урок'} />
}
