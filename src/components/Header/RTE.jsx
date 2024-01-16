import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

const RTE = ({name, control, label, defaultValue}) => {
    
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'>
                    {label}
                </label>
                
            }
            <Controller
                name={name || 'content'}
                    control = { control }
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            branding: false,
                            height: 500,
                            menubar: true,
                            plugins: [
                                'image',
                                'advlist',
                                'autolink',
                                'lists',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'code',
                                'fullscreen',
                                'insertdatetime'
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                         content_style: 'body {\
                     font-family: Helvetica, Arial, sans-serif;\
                     font-size: 14px;\
                           }' }}
                        onEditorChange={onChange}
                    />
                )
                }
                
            />

        </div>
    )
}
export default RTE