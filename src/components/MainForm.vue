<template>
  <q-form>
    <q-card>
      <q-card-section class="text-h6">Call Details</q-card-section>
      <q-card-section class="row q-gutter-x-md">
        <DateSelector class="col col-3" label="Call Date" :model-value="details.date" />
        <q-select
          class="col col-3"
          v-model="details.city"
          :options="data.city"
          label="City"
          outlined
        />
        <q-select
          class="col col-3"
          v-model="details.source"
          :options="data.call_source"
          label="Source"
          outlined
        />
      </q-card-section>
      <q-card-section class="text-h6">Vehicle Details</q-card-section>
      <q-card-section class="row">
        <q-input v-model="details.year" label="Year" outlined class="col col-3" />
        <q-input v-model="details.make" label="Make" outlined class="col col-3" />
        <q-input v-model="details.model" label="Model" outlined class="col col-3" />
        <q-input v-model="details.option" label="Option" outlined class="col col-3" />
        <q-input v-model="details.part" label="Part" outlined class="col col-3" />
        <q-select class="col col-3"
                  v-model="details.in_stock"
                  :options="['Yes','No']"
                  label="Available in stock"
                  outlined
        />
        <q-select class="col col-3"
                  v-model="details.ord"
                  :options="['Yes','No']"
                  label="ORD"
                  outlined
        />
        <q-input v-model="details.supp" label="Supp" outlined class="col col-3" />
        <q-select class="col col-3"
                  v-model="details.delv"
                  :options="['Yes','No']"
                  label="Delv"
                  outlined
        />
        <q-input v-model="details.notes_vn" label="Notes / VN" outlined class="col col-3" />

      </q-card-section>
      <q-card-section class="text-h6">Customer Details</q-card-section>
      <q-card-section class="row">
        <q-input v-model="details.customer_name" label="Customer Name" outlined class="col col-3" />
        <q-input v-model="details.customer_phone" label="Customer Phone" outlined class="col col-3" />
        <q-input v-model="details.customer_email" label="Customer Email" outlined class="col col-3" />
        <q-input v-model="details.customer_address" label="Customer Address" outlined class="col col-3" />
        <q-input v-model="details.ins_name" label="INS Name" outlined class="col col-3" />
        <q-input v-model="details.policy" label="Policy" outlined class="col col-3" />
        <q-input v-model="details.work_order" label="Work Order" outlined class="col col-3" />
        <DateSelector class="col col-3" label="Follow Up Date" :model-value="details.follow_up_date" />
        <q-input v-model="details.notes" label="Notes" outlined class="col col-3" />
        <DateSelector class="col col-3" label="Appointment Date" :model-value="details.appointment_date" />
        <q-select class="col col-3"
                  v-model="details.appointment_time"
                  :options="data.times"
                  label="Appointment Time"
                  outlined
        />
      </q-card-section>


    </q-card>
  </q-form>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import data from 'components/data';
import DateSelector from 'components/FormComponents/DateSelector.vue';

const details = reactive<Call>({
  id: '',
  date: '',
  source: data.call_source[0],
  city: data.city[0],
  year: 0,
  make: '',
  model: '',
  option: '',
  part: '',
  in_stock: 'Yes',
  ord: 'Yes',
  supp: '',
  delv: 'Yes',
  notes_vn: '',
  customer_name: '',
  customer_phone: '',
  customer_email: '',
  customer_address: '',
  ins_name: '',
  policy: '',
  work_order: '',
  follow_up_date: '',
  notes: '',
  appointment_date: '',
  appointment_time: data.times[0],
  received_by: '',
  booked_by: '',
  status: '',
  team: '',
  notes_for_team: '',
  worth_ins: false,
  amount: 0,
  ded: 0,
  payment_method: ''
});
</script>
