
<template>
    <div class="card absolute  top-6 w-full px-3">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script lang="ts" setup>

import Chart from 'primevue/chart';

import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
const ab = ref(20)
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
    
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 80, 56, ab.value , 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 200, 19, 86, 27, 50],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
