<style lang="less">
    @import '../../styles/common.less';
</style>
<template>
    <div style="min-width:1250px;">
        <Row>
            <Col span="16">
                <Form ref="indexData" :model="indexData" :rules="indexValidate" :label-width="80">
                    <Card>
                        <p slot="title">
                            <Icon type="android-create"></Icon>
                            &nbsp;编辑索引
                        </p>
                        <FormItem label="索引名称" prop="name">
                            <Input v-model="indexData.name" placeholder="索引名称不能为空，且长度为 4-64 个字符" icon="android-list" />
                        </FormItem>
                        <FormItem label="所属项目" prop="project">
                            <Select v-model="indexData.project" filterable>
                                <Option v-for="item in projectItems" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>
                    </Card>
                    <Card>
                        <p slot="title">
                            <Icon type="android-create"></Icon>
                            &nbsp; beat&nbsp;配置 - 采集端
                        </p>
                        <FormItem label="日志输入">
                            <Col>
                                <span class="form-note">最少1个日志文件，可同时添加多个日志文件</span>
                                <Button class="margin-left-20" size="small" type="primary" @click="indexData.beatFiles.push('')">添加文件</Button>
                            </Col>
                            <Row v-for="(item, index) in indexData.beatFiles" style="margin-bottom:2px;" :key="index">
                                <Col span="23">
                                    <Input v-model="indexData.beatFiles[index]" placeholder="请输入日志完整路径,可用*号匹配" />
                                </Col>
                                <Col span="1">
                                    <Button type="text" icon="android-close" @click="indexData.beatFiles.splice(index, 1)"></Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="多行处理">
                            <Input v-model="indexData.beatMulPattern" placeholder="多行处理" icon="android-list" />
                            <span><a href="#">查看说明</a></span>
                        </FormItem>
                        <FormItem label="日志输出">
                            <Select v-model="indexData.beatOutput" disabled filterable>
                                <Option :value="indexData.beatOutput">defalut.kafka</Option>
                            </Select>
                            <span class="form-note">当前只支持默认输出方式&nbsp;</span>
                            <span><a href="#">配置查看&nbsp;</a></span>/<span><a href="#">&nbsp;不在列表？</a></span>
                        </FormItem>
                    </Card>
                    <Card>
                        <p slot="title">
                            <Icon type="android-create"></Icon>
                            &nbsp; logstash&nbsp;配置 - 消费端
                        </p>
                        <FormItem label="启用过滤">
                            <Checkbox v-model="indexData.isFilter">&nbsp;启用Filter</Checkbox>
                        </FormItem>
                        <FormItem label="过滤规则" v-show="indexData.isFilter">
                            <Input v-model="indexData.filterRegx" placeholder="请输入过滤规则" icon="android-list" />
                            <span class="form-note">系统只支持固定输入和输出，因此只需配置fitler过滤规则&nbsp;</span>
                            <span><a href="http://grokdebug.herokuapp.com/" target="_blank">过滤规则是否正确？</a></span>
                        </FormItem>
                        <FormItem label="日期处理" v-show="indexData.isFilter">
                            <Row>
                                <Col span="20">
                                    <Input v-model="indexData.dateRegx" :disabled="indexData.isSysDate"  placeholder="请输入日期规则" icon="android-list" />
                                    <span class="form-note">配置日期格式，以日志时间作为ES索引日志的时间</span>
                                </Col>
                                <Col span="3" class="margin-left-20">
                                     <Checkbox v-model="indexData.isSysDate">&nbsp;使用系统时间</Checkbox>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="输出到ES">
                            <Select v-model="indexData.logstashOutput" disabled filterable>
                                <Option :value="indexData.logstashOutput">defalut.elasticsearch</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="2">
                                    <Button type="primary" long>提交</Button>
                                </Col>
                                <Col span="2" class="margin-left-10">
                                    <Button type="ghost" long>返回</Button></Button>
                                </Col>
                            </Row>
                            
                        </FormItem>
                    </Card>
                </Form>
            </Col>
            <Col span="8" class="padding-left-10">
                <Card>
                    <p slot="title">
                        <Icon type="android-warning"></Icon>
                        常见问题
                    </p>
                    <p>
                        <h5 style="color:orange;">是否支持多个输入与输出源？</h5>
                    </p>
                    <p>
                        <span style="font-size:12px;">
                            答：目前系统仅支持相同的输入与输出源，如需要添加多个输入与输出源，请联系管理员。
                        </span>
                    </p>
                    <br>
                    <p>
                        <h5 style="color:orange;">是否支持多个输入与输出源？</h5>
                    </p>
                    <p>
                        <span style="font-size:12px;">
                            答：目前系统仅支持相同的输入与输出源，如需要添加多个输入与输出源，请联系管理员。
                        </span>
                    </p>
                    <br>
                    <p>
                        <h5 style="color:orange;">是否支持多个输入与输出源？</h5>
                    </p>
                    <p>
                        <span style="font-size:12px;">
                            答：目前系统仅支持相同的输入与输出源，如需要添加多个输入与输出源，请联系管理员。
                        </span>
                    </p>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'edit-indices',
        data () {
            return {
                projectItems: [
                    { value: 'uniauth', label: 'uniauth' },
                    { value: 'mainapp', label: 'mainapp' }
                ],
                indexData: {
                    name: '',
                    project: '',
                    beatFiles: [''],
                    beatOutput: 0,
                    beatMulPattern: '',
                    isFilter: false,
                    filterRegx: '',
                    isSysDate: false, // 是否使用系统时间作为日志时间
                    dateRegx: '',
                    logstashOutput: 0
                },
                indexValidate: {
                    name: [
                        { required: true, message: '索引名称不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        computed: {
        }
    };
</script>