import { Tag, Space, Table } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table'
import type { ProColumns } from '@ant-design/pro-table'
import type { AxiosResponse } from 'axios'
import request from '~/utils/request'

type GithubIssueItem = {
  _index: number
  url: string
  id: number
  number: number
  title: string
  labels: {
    name: string
    color: string
  }[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  closed_at?: string
}

const columns: ProColumns<GithubIssueItem>[] = [
  {
    disable: true,
    title: '序号',
    align: 'right',
    dataIndex: 'index',
    valueType: 'index',
    render: (_, record) => record._index,
    width: 80,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        }
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id)
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
]

const Home = () => {
  return (
    <PageContainer>
      <ProTable<GithubIssueItem>
        columns={columns}
        sticky={{
          offsetHeader: 48,
        }}
        rowSelection={{
          selections: [Table.SELECTION_INVERT, Table.SELECTION_NONE],
        }}
        cardBordered={true}
        request={async (params = {}) => {
          const baseIndex =
            (params.pageSize || 10) * ((params.current || 1) - 1) + 1
          const { data } = (await request(
            'https://proapi.azurewebsites.net/github/issues',
            {
              params,
            },
          )) as AxiosResponse<{
            data: GithubIssueItem[]
          }>
          data.data.forEach((item, index) => {
            item._index = baseIndex + index
          })
          return data
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value)
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              }
            }
            return values
          },
        }}
        pagination={{
          size: 'default',
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 30, 40],
          showSizeChanger: true,
        }}
        dateFormatter="string"
        headerTitle="数据表格"
      />
    </PageContainer>
  )
}

export default Home
