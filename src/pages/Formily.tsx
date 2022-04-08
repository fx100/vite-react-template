import { PageContainer } from '@ant-design/pro-layout'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import {
  FormItem,
  Input,
  ArrayCollapse,
  FormButtonGroup,
  Submit,
} from '@formily/antd'
import 'antd/es/badge/style' // @formily/antd ArrayCollapse bug

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCollapse,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    array: {
      type: 'array',
      'x-component': 'ArrayCollapse',
      maxItems: 3,
      'x-decorator': 'FormItem',
      items: {
        type: 'object',
        'x-component': 'ArrayCollapse.CollapsePanel',
        'x-component-props': {
          header: '对象数组',
        },
        properties: {
          index: {
            type: 'void',
            'x-component': 'ArrayCollapse.Index',
          },
          input: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'Input',
            required: true,
            'x-component': 'Input',
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayCollapse.Remove',
          },
          moveUp: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveUp',
          },
          moveDown: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveDown',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: '添加条目',
          'x-component': 'ArrayCollapse.Addition',
        },
      },
    },
  },
}

const Home = () => {
  return (
    <PageContainer>
      <FormProvider form={form}>
        <SchemaField schema={schema} />
        <FormButtonGroup>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </PageContainer>
  )
}

export default Home
